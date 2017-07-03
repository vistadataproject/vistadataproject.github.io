---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORB SORT METHOD
# ORB SORT METHOD

Method for sorting notifications when displayed in the CPRS GUI. Methodsinclude: by Patient, Message (text), Urgency, Info, Location, Date/Time,and Forwarded By/When.

Property | Value
--- | ---
ID | 83
Summary | Notification Sort Method
Value Type | set of codes
Value Domain | P:Patient;M:Message;U:Urgency;I:Info;L:Location;D:Date/Time;F:Forwarded By/When;
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | DIVISION
3 | SYSTEM
4 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}