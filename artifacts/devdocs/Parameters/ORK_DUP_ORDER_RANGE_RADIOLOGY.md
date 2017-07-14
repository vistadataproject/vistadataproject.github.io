---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORK DUP ORDER RANGE RADIOLOGY<br/>
# ORK DUP ORDER RANGE RADIOLOGY

The number of hours backwards in time to look for duplicate radiologyorders. For example, a value of &#x27;24&#x27; indicates a radiology/imagingprocedure performed within 24 hours of the current order&#x27;s effective date/time will trigger an order check alerting the user to the duplicate.

## Properties

Property | Value
--- | ---
Summary | Duplicate radiology order date range
Value Type | numeric
Value Domain | 1:100000:0
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | SERVICE
3 | DIVISION
4 | SYSTEM
5 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}