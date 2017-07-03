---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; GMRC IFC BACKGROUND START
# GMRC IFC BACKGROUND START

This parameter contains the last start date/time of the Inter-facility Consults background job.   This parameter will help the system know whether a sufficient amount of time has passed since the last run.  If this parameter is set to afuture date/time, the background job will not run until that date /time.  The parameter may only be set up to 4 days in the future.

Property | Value
--- | ---
ID | 4725
Summary | Start date/time of IFC background job
Value Type | date
Value Domain | ::T
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}