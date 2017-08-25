---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORPF PROMPT FOR LABELS<br/>
# ORPF PROMPT FOR LABELS

This parameter allows various levels of user interaction for printing a label on the ward for orders.      ENTER 0 for no prompts- labels are automatically generated.         1 to prompt for labels and ask which printer should be used.         2 to prompt for labels and automatically print to the printer           defined in the LABEL PRINT DEVICE field.         * don&#x27;t print.

## Properties

Property | Value
--- | ---
Summary | Prompt for Labels
Value Type | set of codes
Value Domain | 0:DON&#x27;T PROMPT;1:PROMPT AND ASK DEVICE;2:PROMPT AND NOT ASK DEVICE;*:DON&#x27;T PRINT
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | DIVISION
3 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}