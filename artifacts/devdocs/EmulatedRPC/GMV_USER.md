---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; GMV USER<br/>
# GMV USER

Get/set a current-user entity parameter or get user sign-on information. The function executed the parameter types and the value types returned depend on the OPTION requested:    GETPAR: Get the "GMV USER DEFAULT" parameter instance defined by the "DATA" variable            DATA: The name of the instance to get.            Return: The parameter value, or empty string    SETPAR: Set or clear the "GMV USER DEFAULT" parameter instance defined by the "DATA" variable            DATA: The name of the instance to set with the value to set, separated by a caret (e.g. TEST^10) or just the instance to clear            Return: Return code (success=1 or fail=-1) with message    SIGNON: Get the info for the currently logged in user            DATA: Should be an empty string            Return: Array of user parameter values

**Native RPC Documentation:** [GMV USER](../VISTARPC/GMV_USER)

**MUMPS Implementation:** [RPC^GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Parameters
Class | READ/WRITE
Complexity | MODERATE
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | None
Parameters Used | [GMV USER DEFAULTS](../Parameters/GMV_USER_DEFAULTS)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
OPTION | LITERAL | true | Command option name to execute. See description for acceptable values | SETPAR
DATA | LITERAL | false | Other data as required for call. See description for proper formats | ABNORMALBGCOLOR^15

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}