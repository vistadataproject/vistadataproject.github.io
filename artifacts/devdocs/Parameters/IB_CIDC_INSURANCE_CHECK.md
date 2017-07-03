---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; IB CIDC INSURANCE CHECK
# IB CIDC INSURANCE CHECK

This parameter is used to set a switch if CIDC related questions shouldbe asked.  Setting this parameter will effect multiple packages and users,therefore great care should be cautioned when editing this parameter.Values are:  0 &#x3D; Don&#x27;t ask CIDC related questions for anyone             1 &#x3D; Ask CIDC related questions only if the patient has active                 billable insurance.             2 &#x3D; Ask CIDC questions for all patients. This does not over-ride the CPRS switches for how the GUI asks questions,but enhances the limits of the questions for the GUI.

Property | Value
--- | ---
ID | 401
Summary | CIDC Questions
Value Type | set of codes
Value Domain | 0:Don&#x27;t Ask;1:Ask if Insured;2:Ask Always
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}