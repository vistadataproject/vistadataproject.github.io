---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORM TASKMAN QUEUE FREQUENCY
# ORM TASKMAN QUEUE FREQUENCY

The number of minutes to delay between processing OCX time-based events viaTaskMan.  If the parameter is not set, a default of 240 minutes will be used.  The maximum number of minutes is 100,00 (1667 hours or 69 days).

Property | Value
--- | ---
ID | 144
Summary | Freq to check timed events via TaskMan
Value Type | numeric
Value Domain | 1:100000:0
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}