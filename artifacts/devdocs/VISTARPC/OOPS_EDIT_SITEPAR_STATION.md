---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS EDIT SITEPAR STATION<br/>
# OOPS EDIT SITEPAR STATION

This broker call will either add a new Station subfile to the Site parameterfile or will allow for editing an existing Station subfile.  If the StationIEN is passed in the INPUT parameter, the record will be edited.  If a StationIEN is not passed in the input parameter, a new record will be created.

## Properties

Property | Value
--- | ---
Label | SITEPEDT
MUMPS Implementation | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This parameter (INPUT) contains the required IENs for filing a record.  If theStation IEN is passed in the record will be edited, if no Station IEN ispresent, a new Station subrecord will be created.  The format is:SITE IEN^SUBFILE #^STATION IEN
DATA | LITERAL | 256 | true | This parameter contains the data to be filed in the Station subfile.
FORM | LITERAL | 30 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}