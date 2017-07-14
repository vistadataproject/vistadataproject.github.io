---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORPF PROMPT FOR REQUISITIONS<br/>
# ORPF PROMPT FOR REQUISITIONS

This field allows various levels of user interaction for printing arequisition on the ward for orders.   ENTER 0 for no prompts- requisitions are automatically generated.       1 to prompt for requisitions and which printer should be used.       2 to prompt for requisitions and automatically print to the         printer defined in the REQUISITION PRINT DEVICE field.       * don&#x27;t print.

## Properties

Property | Value
--- | ---
Summary | Prompt for Requisitions
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