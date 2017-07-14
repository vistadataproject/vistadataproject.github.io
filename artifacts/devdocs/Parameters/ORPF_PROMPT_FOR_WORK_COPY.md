---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORPF PROMPT FOR WORK COPY<br/>
# ORPF PROMPT FOR WORK COPY

This field allows various levels of user interaction for printing awork copy of the orders.    ENTER 0 for no prompts- work copy is automatically generated.        1 to prompt for work copy and ask which printer should be used.        2 to prompt for work copy and automatically print to the          printer defined in the WORK COPY PRINT DEVICE field.        * don&#x27;t print.

## Properties

Property | Value
--- | ---
Summary | Prompt for Work Copy
Value Type | set of codes
Value Domain | 0:DON&#x27;T PROMPT;1:PROMPT AND ASK DEVICE;2:PROMPT AND NOT ASK DEVICE;*:DON&#x27;T PRINT
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | DIVISION
3 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}