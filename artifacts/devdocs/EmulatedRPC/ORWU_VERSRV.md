---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWU VERSRV
# ORWU VERSRV

return server version of option name. This is specifically used by CPRS GUI to determine the current server version of the associated software

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWU VERSRV](../VISTARPC/ORWU_VERSRV)
MUMPS Implementation | [VERSRV^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [19](../VDM/Option-19)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
X | LITERAL | true | the formal name of an option | OR CPRS GUI CHART
CLVER | LITERAL | false | a server version to be stored as global variable | 1.1.1.1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}