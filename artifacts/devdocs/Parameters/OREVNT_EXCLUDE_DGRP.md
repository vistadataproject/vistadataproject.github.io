---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; OREVNT EXCLUDE DGRP<br/>
# OREVNT EXCLUDE DGRP

If the &quot;copy active orders&quot; field of a release event is set to YES then any orders that belong to the display groups listed in this parameter will NOT be presented in the list of orders to copy.  This parameter allows you to screen certain types of orders from being copied when writing delayed orders.

## Properties

Property | Value
--- | ---
Summary | Excluded groups for copy active order
Value Type | pointer
Value Domain | 100.98
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}