---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORPF EXPAND CONTINUOUS ORDERS
# ORPF EXPAND CONTINUOUS ORDERS

This is a site parameter to enable continuous orders (i.e., orders with acontinuous schedule, e.g., QD or Q4H) to be expanded or not on the chartcopy.  If set to YES, an order for GLUCOSE BLOOD SERUM with the scheduleQD would appear on the chart as:   05/17 11:04  GLUCOSE BLOOD SERUM                   Marcus Welby, MD               LB #805    WC   ROUTINE   05/18 11:04  GLUCOSE BLOOD SERUM                   Marcus Welby, MD               LB #806    WC   ROUTINE   05/19 11:04  GLUCOSE BLOOD SERUM                   Marcus Welby, MD               LB #807    WC   ROUTINE  If this parameter is set to NO, the same order would appear as:   05/17 11:04  GLUCOSE BLOOD SERUM   QD              Marcus Welby, MD

Property | Value
--- | ---
ID | 111
Summary | Expand Continuous Orders
Value Type | yes
Value Domain | N/A
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}