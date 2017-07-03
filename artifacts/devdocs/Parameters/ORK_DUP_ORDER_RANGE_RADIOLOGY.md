---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORK DUP ORDER RANGE RADIOLOGY
# ORK DUP ORDER RANGE RADIOLOGY

The number of hours backwards in time to look for duplicate radiologyorders. For example, a value of &#x27;24&#x27; indicates a radiology/imagingprocedure performed within 24 hours of the current order&#x27;s effective date/time will trigger an order check alerting the user to the duplicate.

Property | Value
--- | ---
ID | 169
Summary | Duplicate radiology order date range
Value Type | numeric
Value Domain | 1:100000:0
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | SERVICE
3 | DIVISION
4 | SYSTEM
5 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}