---
layout: page
title: Automated Prompt Injection Attacks Against LLM Agents
description: Master's Thesis exploring automated adversarial attacks against LLM agents in AgentDojo.
img: assets/img/publication_preview/thesis_teaser.jpg # TODO: Add a teaser image here!
importance: 1
category: work
related_publications: true
---

This project represents my Master's Thesis at ETH Zurich (SPYLab), where I investigated the security vulnerabilities of Large Language Model (LLM) agents. As agents evolve from simple chatbots to autonomous systems capable of executing real-world actions (e.g., sending emails, managing bank accounts), they become susceptible to **indirect prompt injection** attacks.

## The Problem

Prompt injection exploits the inability of LLMs to reliably distinguish between instructions and data. In an "indirect" attack, an adversary embeds malicious instructions in external content (like a webpage or email) that the agent retrieves. When the agent processes this content, it may be tricked into executing unauthorized actions.

While automated attacks like **GCG** (Greedy Coordinate Gradient) and **TAP** (Tree of Attacks with Pruning) have been extensively studied for *jailbreaking* (eliciting harmful text), their effectiveness against *agents* (hijacking tool execution) remained largely unexplored.

## Methodology

I extended the **AgentDojo** framework to support white-box attacks and adapted two major adversarial algorithms to the agent setting:

1.  **GCG (White-Box):** A gradient-based optimization method. I adapted it to optimize adversarial token sequences that force the agent to output specific tool calls.
2.  **TAP (Black-Box):** An iterative tree-search algorithm using an "Attacker LLM" to generate and refine injection strategies.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/thesis/attack_architecture.jpg" title="Attack Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The conceptual flow of automated prompt injection: optimizing a payload that, when retrieved via tool-call observations, hijacks the agent's control flow.
</div>

## Key Results

My comprehensive evaluation across 80 task pairs revealed that black-box search (TAP) is significantly more effective at hijacking agents than gradient-based methods (GCG) when moving from optimization to deployment.

### Attack Success Rate (ASR) Comparison

| Method | Qwen 3 4B | Gemma 3 4B | GPT-5 (Transfer) |
| :--- | :---: | :---: | :---: |
| **Direct Instruction (Baseline)** | 11.2% | 6.7% | 1.2% |
| **Single-Task GCG** | 23.0% | 20.2% | 0.9%* |
| **Universal GCG** | 25.2% | 7.2% | 1.3%* |
| **Single-Task TAP** | 36.6% | - | 2.8% |
| **Universal TAP** | **45.2%** | - | **5.8%** |

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/thesis/asr_comparison.jpg" title="ASR Results" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/thesis/generalization.jpg" title="Generalization Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Overall Attack Success Rate (ASR) across different models. Right: Analysis of how universal attacks generalize to unseen task domains.
</div>

## Main Findings

*   **The Optimization-Deployment Gap:** The gap between the optimization environment and real-world deployment is a bigger hurdle for gradient-based attacks (GCG) than the absence of gradient information is for search-based attacks (TAP).
*   **The "Frontier" Gap:** Attacks optimized on smaller open-source models failed to transfer to frontier models like **GPT-5** (success rates < 2%), highlighting a significant robustness gap in proprietary models.
*   **Structure vs. Tokens:** Semantic structure (e.g., mimicking system alerts) often matters more than precise token-level optimization.

---

<div class="row justify-content-center">
    <div class="col-auto">
        <a href="/assets/pdf/msc_thesis.pdf" target="_blank" class="btn btn-outline-primary">Read the Full Thesis (PDF)</a>
    </div>
    <div class="col-auto">
        <a href="https://github.com/ethz-spylab/s25-automated-pi" target="_blank" class="btn btn-outline-dark">View Code on GitHub</a>
    </div>
</div>
