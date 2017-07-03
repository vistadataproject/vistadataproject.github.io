---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORWOR ENABLE VERIFY
# ORWOR ENABLE VERIFY

This parameter controls whether nurses are allowed to verify orders in theGUI.  The default value is 0, which allows nurses to verify orders onlywhen ordering is enabled.  To allow nurses to verify orders when orderingis disabled, set the value to 1.  To never allow the verify actions, setthe value to 2. This parameter applies to the &quot;Verify&quot; and &quot;Chart Review&quot; on the Actionsmenu on the Order tab.

Property | Value
--- | ---
ID | 37
Summary | Enable/Disable Order Verify Actions
Value Type | set of codes
Value Domain | 0:Enable Verify Actions if Ordering Enabled;1:Enable Verify Actions Always;2:Disable Verify Actions
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
5 | SYSTEM
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}