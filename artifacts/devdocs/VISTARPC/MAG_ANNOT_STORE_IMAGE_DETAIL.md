---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG ANNOT STORE IMAGE DETAIL<br/>
# MAG ANNOT STORE IMAGE DETAIL

 Per VHA Directive 2004-038, this should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+Store the annotation detail/XML into the IMAGING ANOTATION file (#2005.002) .MAGOUT       Reference to a local variable where the results are returned to .MAGIEN       Internal Entry Number(IEN) of IMAGE file been annotated .SOURCE       Reference to the application XML been created by ('CLINIC' or 'VISTARAD'...etc) .VER          Reference to the annotation tool version (e.g.: IG16.2) .XML[]          Annotation raw data arrayReturn Values MAGOUT(0) is defined and its 1st '^'-piece is 0, then an error  occurred during execution of the procedure.MAGOUT(0) = 1 - success ^ total data lines ^ child IEN(optional)            0 - errorMAGOUT(1) = Saved layer info:::LAYER ID ^ANNOTATOR ^ SAVED DATE/TIME ^ ANNOTATION VERSION ^ SOURCE ^ DELETION ^ TIU COMPLETION             ^ SERVICE/SECTION  ^ SITE# ^ DUZ

## Properties

Property | Value
--- | ---
Label | STORE
Routine | [MAGSANNO](http://code.osehra.org/dox/Routine_MAGSANNO_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | IEN is the IMAGE file (#2005) internal entry number, be used to save the annotation data.
XML | WORD PROCESSING | 256 | true | Annotation data in XML format
SOURCE | LITERAL | 30 | true | Source of annotation, e.g.: Clinic display/capture or VistARad
DELETION | LITERAL | 3 |  | Annotation was deleted by super user.
VERSION | LITERAL | 30 | true | IMAGE GEAR VERSION (TOOLS), e.g.: &#x27;IG16.3&#x27;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}