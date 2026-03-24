# Useful AI Prompts
This is a list of prompts I have compiled that I use to get some specific response from any LLM.

## Doc Generating

> **Purpose:** Quickly get up to speed on a new tool without losing control of how you build.

This is not documentation in the traditional sense. The goal is to generate developer-focused reference material for tools — such as libraries or frameworks — that will be used in an upcoming project. Rather than spending time digging through official docs, this prompt lets you skip straight to what matters: understanding a tool well enough to use it confidently while keeping full control over design and implementation decisions.

### Prompt

```
I am building [brief project description]. I plan to use [tool/library/framework name] for [specific purpose in the project].

Generate concise developer-focused documentation for this tool scoped to my use case. Include:
- A short overview of what the tool does and why it fits this project
- Key concepts and terminology I need to understand before using it
- A breakdown of the most important functions/APIs for my use case
- For each function/API: what it does, when to use it, required arguments, return value, and a short usage snippet
- Common function usage patterns (initialization, configuration, error handling, cleanup)
- Any gotchas, limitations, or best practices I should know upfront

Keep it practical and concise. Skip anything that isn't relevant to the described use case.
```