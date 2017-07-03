---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; LR VER EA VERIFY BY UID
# LR VER EA VERIFY BY UID

Used to designate the default verification method presented tothe user when verifying laboratory results in the &quot;CH&quot; subscriptvia options that use a load/work list. Parameter is associatedwith the accession area linked to the load/worklist profileselected by the user.Parameter can be set at the package or user level. User level takes precedence over division level.Site can also force verification by UID only.

Property | Value
--- | ---
ID | 691
Summary | Default load/work list verify method
Value Type | set of codes
Value Domain | 0:Accession Number;1:Unique Identifier (UID);2:Only UID
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}