---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV VALIDATE VI INDEX TERMS
# DSIV VALIDATE VI INDEX TERMS

This Remote Procedure Call validates the interdependency of VIindex terms.  It ensures that Type, Procedure/Event, andSpecialty/SubSpecialty are active, checks to see if Type is Clinical ifProcedure/Event or Specialty/SubSpecialty are input, and makes sure thatthe input Specialty/SubSpecialty is associated with the inputProcedure/Event.

Property | Value
--- | ---
Label | VLDTSP
Routine | [DSIVTSP](http://code.osehra.org/dox/Routine_DSIVTSP_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROC | LITERAL | 50 | true | PROC is the Procedure/Event which is found in file ^MAG(2005.84) as fieldNAME.
TYPE | LITERAL | 40 | true | TYPE is the Type Index which is found in file ^MAG(2005.83) as field NAME.
SPEC | LITERAL | 30 | true | SPEC is the Specialty/SubSpecialty which is found in file ^MAG(2005.85) as field NAME.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}