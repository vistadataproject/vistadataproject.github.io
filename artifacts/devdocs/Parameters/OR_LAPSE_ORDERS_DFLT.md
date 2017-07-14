---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; OR LAPSE ORDERS DFLT<br/>
# OR LAPSE ORDERS DFLT

The purpose of this parameter is to store the number of days that old orders will be lapsed when those orders are from a DISPLAY GROUP that does not have parameter OR LAPSE ORDERS set.  The default value that is set in this parameter will affect all orders that do not have a specific DISPLAY GROUP value.  Thus if both &quot;Display Group A&quot; and &quot;Display Group B&quot; have parameter OR LAPSE ORDERS set for them but &quot;Display Group C&quot; does not, then orders from &quot;Display Group C&quot; will get lapsed in the number of days specified in OR LAPSE ORDERS DFLT.

## Properties

Property | Value
--- | ---
Summary | LAPSE UNSIGNED/UNRELEASED ORDER DEFAULT
Value Type | numeric
Value Domain | 1:999
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
5 | DIVISION
10 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}