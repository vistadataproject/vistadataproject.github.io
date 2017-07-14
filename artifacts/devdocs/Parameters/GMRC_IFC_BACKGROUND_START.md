---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; GMRC IFC BACKGROUND START<br/>
# GMRC IFC BACKGROUND START

This parameter contains the last start date/time of the Inter-facility Consults background job.   This parameter will help the system know whether a sufficient amount of time has passed since the last run.  If this parameter is set to afuture date/time, the background job will not run until that date /time.  The parameter may only be set up to 4 days in the future.

## Properties

Property | Value
--- | ---
Summary | Start date/time of IFC background job
Value Type | date
Value Domain | ::T
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}