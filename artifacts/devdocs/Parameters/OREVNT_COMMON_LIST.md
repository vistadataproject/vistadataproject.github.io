---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; OREVNT COMMON LIST
# OREVNT COMMON LIST

Release events defined by this parameter will appear first in the list box when the user is writing delayed orders.  These commonly used release events will appear above a line with the rest of the available release events appearing below the line. Before the list is presented to the user events that are inactive and events that are inappropriate for display (for example, transfer types when the patient is still an outpatient) will be removed from the list.

Property | Value
--- | ---
ID | 173
Summary | List of common release events
Value Type | pointer
Value Domain | 100.5
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | CLASS
3 | TEAM (OE_RR)
4 | LOCATION
5 | SERVICE
6 | DIVISION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}