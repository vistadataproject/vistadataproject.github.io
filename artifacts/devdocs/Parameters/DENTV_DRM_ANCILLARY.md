---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; DENTV DRM ANCILLARY
# DENTV DRM ANCILLARY

This parameter is multi-instance for the purpose of knowing which ancillary products can be launched from within DRM Plus.  It enables, or hides, the appropriate buttons for the user.  For example, DRM Plus can launch MiPACS to view dental radiographs, and iMedConsent to get required consent forms. Instance name            Value            Entity----------------        ---------         ----------MiPACS                   soc Y/N          SystemiMedConsent              soc Y/N          SystemiMedConsentLoc          server location   System

Property | Value
--- | ---
ID | 408
Summary | Ancillary products
Value Type | free text
Value Domain | 1-240
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
5 | PACKAGE
9 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}