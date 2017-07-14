---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; PSB BKUP DEFAULT<br/>
# PSB BKUP DEFAULT

This parameter is used by the BCMA Backup system to route messages to a &quot;default&quot; group of HL7 Logical Links that are associated with the BCMApackage rather than individual divisions. When the default group is defined all messages will be routed to this group rather than using division-based groupings under the following conditions: 1. If a call is made to the api, GET^ALPBPARM, and the division parameter is not present or null.2. If a call is made to the api, GET^ALPBPARM, and the division specified has no logical links associated with it.

## Properties

Property | Value
--- | ---
Summary | Package-specific &#x27;default&#x27; Logical Links
Value Type | pointer
Value Domain | 870
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
.5 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}