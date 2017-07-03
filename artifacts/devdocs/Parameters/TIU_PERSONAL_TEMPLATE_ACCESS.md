---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; TIU PERSONAL TEMPLATE ACCESS
# TIU PERSONAL TEMPLATE ACCESS

This parameter is used to specify access to personal templates.  A setting of READ ONLY allows the use of personal templates, but does not allow the creation of new personal templates.  To restrict template use by USER CLASS,use the TIU TEMPLATE ACCESS BY CLASS parameter.  These two parameters work together, in the following precedence order: Precedence  Parameter----------  ----------------------------USER        TIU PERSONAL TEMPLATE ACCESSUSER CLASS  TIU TEMPLATE ACCESS BY CLASSLOCATION    TIU PERSONAL TEMPLATE ACCESSSERVICE     TIU PERSONAL TEMPLATE ACCESSDIVISION    TIU PERSONAL TEMPLATE ACCESSSYSTEM      TIU PERSONAL TEMPLATE ACCESS

Property | Value
--- | ---
ID | 4653
Summary | Personal Template Access
Value Type | set of codes
Value Domain | 0:FULL ACCESS;1:READ ONLY;2:NO ACCESS
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | LOCATION
3 | SERVICE
4 | DIVISION
5 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}