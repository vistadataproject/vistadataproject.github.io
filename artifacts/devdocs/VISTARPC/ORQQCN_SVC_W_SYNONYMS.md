---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN SVC W SYNONYMS<br/>
# ORQQCN SVC W SYNONYMS

This is a modified version of ORQQCN GET SERVICE TREE that also includessynonyms for the services returned. It also allows passing of an optionalConsult IEN, for screening allowable services to forward the consult to,especially in the case of interfacility consults.

## Properties

Property | Value
--- | ---
Label | SVCSYN
MUMPS Implementation | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Start With | LITERAL | 32 |  | Which service in the hierarchy to begin with.
Purpose | LITERAL | 2 |  | 0 for display purposes, 1 to order or forward a consult.
Include Synonyms | LITERAL | 2 |  | 0 to exclude synonyms, 1 to include synonyms.
Consult IEN | LITERAL | 16 | true | OPTIONAL - Include pointer to file 123, the Consult Request file.  Used when forwarding a consult, and screening needs to be done to limit the list of services.




## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}