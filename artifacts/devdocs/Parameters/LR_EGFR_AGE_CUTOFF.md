---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; LR EGFR AGE CUTOFF
# LR EGFR AGE CUTOFF

Used to designate if the EGFR calculation should not be performed on creatinine when executing the delta check EGFR when thepatient&#x27;s age is &lt;18 or &gt;70. This parameter is configurableat both the package and division level and can be set foreither or both age cutoffs.

Property | Value
--- | ---
ID | 696
Summary | EGFR Patient&#x27;s Age Cutoff
Value Type | set of codes
Value Domain | 0:NEVER;1:&lt;18 YEARS;2:&gt;70 YEARS;3:BOTH
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}