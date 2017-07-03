---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; OREVNT MANUAL RELEASE CONTROL
# OREVNT MANUAL RELEASE CONTROL

This parameter defines how access to the manual release action is controlled.  There are three possible settings: 1: Keys Only - In this setting only holders of the ORES and ORELSE key may manually release a delayed order.  This is how the system previously controlled access to this action.  If the OREVNT MANUAL RELEASE CONTROL parameter is not set then this will be the default setting. 2: Manual Release Parameter Only - In this setting the OREVNT MANUAL RELEASE parameter controls who is allowed to manually release a delayed  order.  The OREVNT MANUAL RELEASE parameter is distributed with no settings, which effectively denies access to manual release if the control parameter is set to P. In order to have the OREVNT MANUAL RELEASEparameter control access to the manual release action you must set somelevel of the parameter to a positive (YES) value. 3: Both Keys and Parameter - In this setting a check is first made to see if the user has either the ORES or ORELSE key.  If they do not then a check is made to see if the user will have access through the parameter settings.  In this setting, if the user does not hold either the ORES or ORELSE key they could still have access to the action based on your parameter settings, which may be more liberal than you&#x27;d like.  Be sure to check your settings.

Property | Value
--- | ---
ID | 152
Summary | Manual release control setting
Value Type | set of codes
Value Domain | K:Keys Only (ORES/ORELSE);P:Manual Release Paramater Only (OREVENT MANUAL RELEASE);B:Both (K and P)
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}