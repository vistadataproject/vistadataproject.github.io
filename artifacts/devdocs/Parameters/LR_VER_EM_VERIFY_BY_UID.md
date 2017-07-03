---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; LR VER EM VERIFY BY UID
# LR VER EM VERIFY BY UID

Used to designate the default verification method presented tothe user when verifying laboratory results in the &quot;CH&quot; subscriptvia options that do not use a load/work list.Parameter can be set at the package, division or userlevel. Division level takes precedence over the package level.User level takes precedence over division level.Site can also force verification by UID only.

Property | Value
--- | ---
ID | 698
Summary | Default manual verify method
Value Type | set of codes
Value Domain | 0:Accession Number;1:Unique Identifier (UID);2:Only UID
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | DIVISION
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}