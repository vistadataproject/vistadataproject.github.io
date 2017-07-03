---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; OR LAPSE ORDERS
# OR LAPSE ORDERS

The purpose of this parameter is to store the number of days that old orders will be lapsed.  This parameter is multi valued with an instance term of DISPLAY GROUPS.  Thus the way it works is that you can set &quot;Display Group A&quot; so that old orders from this display group will lapse in 10 days for instance.  Then you could have &quot;Display Group B&quot; set so that those orders would lapse when they are 20 days old. Display groupsnot individually set by this parameter are affected by the OR LAPSE ORDERS DFLT parameter.  By lapsing, it is meant that the order is placed in a LAPSED status.Also see the description for parameter OR LAPSE ORDERS DFLT.

Property | Value
--- | ---
ID | 493
Summary | LAPSE UNSIGNED/UNRELEASED ORDER BY GROUP
Value Type | numeric
Value Domain | 1:999
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
5 | DIVISION
10 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}