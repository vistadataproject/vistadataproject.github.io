---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWU NEWPERS<br/>
# ORWU NEWPERS

Returns a set of New Person file entries for use in a long list box.

**Native RPC Documentation:** [ORWU NEWPERS](../VISTARPC/ORWU_NEWPERS)

**MUMPS Implementation:** [NEWPERS^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [3.1](../VDM/Title-3_1), [20](../VDM/Name_Components-20), [49](../VDM/Service_section-49), 389.9, 200, [8932.1](../VDM/Person_Class-8932_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORFROM | LITERAL | true | Starting name for set of New Person entries to return | ALEXANDER,ROBERS~
ORDIR | LITERAL | true | Direction to move through the x-ref with $O (1 or -1) | -1
ORKEY | LITERAL | false | Screen users by security key (optional) | PROVIDER
ORDATE | LITERAL | false | Checks for an active person class on this date (optional) | 3170506
ORVIZ | LITERAL | false | If true, includes RDV users; otherwise does not (optional) | 1
ORALL | LITERAL | false | specifies whether or not to return ALL users, both active and inactive. | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}