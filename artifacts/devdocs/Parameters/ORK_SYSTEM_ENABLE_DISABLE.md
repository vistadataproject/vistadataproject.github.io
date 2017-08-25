---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORK SYSTEM ENABLE/DISABLE<br/>
# ORK SYSTEM ENABLE/DISABLE

Parameter determines if any order checking will occur.  &#x27;E&#x27; or &#x27;Enable&#x27;indicates order checking is enabled and running. &#x27;D&#x27; or &#x27;Disabled&#x27;indicates order checking is disabled and not running.  Can be set at the Institution, System, or Package level.

## Properties

Property | Value
--- | ---
Summary | Enable or disable order checking system.
Value Type | set of codes
Value Domain | E:Enable;D:Disable
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}