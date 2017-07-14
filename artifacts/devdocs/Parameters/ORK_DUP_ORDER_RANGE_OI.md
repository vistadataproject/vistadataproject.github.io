---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORK DUP ORDER RANGE OI<br/>
# ORK DUP ORDER RANGE OI

The number of hours back in time to look for duplicate orders. For example,a value of &#x27;24&#x27; indicates if a duplicate of the orderable item was placedwithin the previous 24 hours, an order check indicating duplicate order will occur.  A value of &#x27;0&#x27; (zero) indicates do not check for duplicates -duplicate order checking for this orderable item will not occur.

## Properties

Property | Value
--- | ---
Summary | Orderable item duplicate date range
Value Type | numeric
Value Domain | 0:100000:0
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | SERVICE
3 | DIVISION
4 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}