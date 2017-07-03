---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORK DUP ORDER RANGE LAB
# ORK DUP ORDER RANGE LAB

The number of hours backwards in time to look for duplicate lab orders.For example, a value of &#x27;24&#x27; indicates a lab procedure intended to becollected within 24 hours of the collection of the same lab procedure will trigger an order check indicating duplicate lab order.  Note: if the labprocedure has an entry in the parameter OR DUP ORDER DATE RANGE OI, theOI parameter takes precedence.

Property | Value
--- | ---
ID | 168
Summary | Duplicate lab orders date range
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