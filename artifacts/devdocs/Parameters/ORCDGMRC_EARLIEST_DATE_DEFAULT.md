---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORCDGMRC EARLIEST DATE DEFAULT<br/>
# ORCDGMRC EARLIEST DATE DEFAULT

This defines the default date value for the Earliest Appropriate Date (EAD) field in consult and procedure orders.  This date value can be TODAYor greater and must be a relative date (e.g. &quot;TODAY&quot;, T+7D, &quot;T+2W&quot;).Past dates and precise dates are not permitted.  The date value may also be a null/empty date, which is set by deleting (via XPAR MENU TOOLS) thecurrent value for the parameter (if one is set). Any new orders in CPRS GUI and new quick orders will default to the parameter value.  Any quick orders that currently have a default value for the EAD will retain that value.  If that quick order should reflect the parameter value, simply remove the current default value for the quick order and save the change.  The quick order would then defaultto the parameter value.

## Properties

Property | Value
--- | ---
Summary | Earliest Appropriate Date Default
Value Type | free text
Value Domain | 
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}