---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; DENTV DRM ANCILLARY<br/>
# DENTV DRM ANCILLARY

This parameter is multi-instance for the purpose of knowing which ancillary products can be launched from within DRM Plus.  It enables, or hides, the appropriate buttons for the user.  For example, DRM Plus can launch MiPACS to view dental radiographs, and iMedConsent to get required consent forms. Instance name            Value            Entity----------------        ---------         ----------MiPACS                   soc Y/N          SystemiMedConsent              soc Y/N          SystemiMedConsentLoc          server location   System

## Properties

Property | Value
--- | ---
Summary | Ancillary products
Value Type | free text
Value Domain | 1-240
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
5 | PACKAGE
9 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}