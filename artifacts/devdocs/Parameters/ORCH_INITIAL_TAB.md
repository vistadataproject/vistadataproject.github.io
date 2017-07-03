---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORCH INITIAL TAB
# ORCH INITIAL TAB

This parameter identifies the tab that should be initially displayed whenCPRS first starts.  If ORCH USE LAST TAB is &#x27;no&#x27;, this tab is also usedwhenever a new patient is selected.

Property | Value
--- | ---
ID | 4672
Summary | Initial Tab when CPRS Starts
Value Type | set of codes
Value Domain | 1:Cover;2:Problems;3:Meds;4:Orders;6:Notes;7:Consults;8:DCSumm;9:Labs;10:Reports;11:Surgery
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
2 | USER
4 | DIVISION
5 | SYSTEM
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}