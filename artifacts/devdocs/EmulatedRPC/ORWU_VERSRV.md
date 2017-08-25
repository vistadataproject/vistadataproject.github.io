---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWU VERSRV<br/>
# ORWU VERSRV

return server version of option name. This is specifically used by CPRS GUI to determine the current server version of the associated software

**Native RPC Documentation:** [ORWU VERSRV](../VISTARPC/ORWU_VERSRV)

**MUMPS Implementation:** [VERSRV^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [19](../VDM/Option-19)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
X | LITERAL | true | the formal name of an option | OR CPRS GUI CHART
CLVER | LITERAL | false | a server version to be stored as global variable | 1.1.1.1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}