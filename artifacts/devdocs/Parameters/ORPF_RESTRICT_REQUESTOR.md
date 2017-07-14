---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORPF RESTRICT REQUESTOR<br/>
# ORPF RESTRICT REQUESTOR

This field allows a site to restrict the selection of providerswhen adding new orders at the &#x27;Requesting CLINICIAN: &#x27; prompt forholders of the ORELSE and OREMAS key.  The restriction being thatthey cannot select themselves as the requestor even though they mayalso hold the PROVIDER key.   1 YES (ORELSE)          -restricts only holders of the ORELSE key.  2 YES (ORELSE &amp; OREMAS) -restricts holders of either key.

## Properties

Property | Value
--- | ---
Summary | Restrict Requestor
Value Type | set of codes
Value Domain | 0:NO;1:YES (ORELSE);2:YES (ORELSE &amp; OREMAS)
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}