---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG ANNOT GET IMAGE<br/>
# MAG ANNOT GET IMAGE

 Per VHA Directive 2004-038, this should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+RETURNS THE LIST OF IMAGE ANNOTATIONS .MAGOUT       Reference to a local variable where the results .MAGIEN       Internal Entry Number of IMAGE file being annotated Return Values If MAGOUT(0) is defined and its 1st '^'-piece is 0, then an error    occurred during execution of the procedure. 0^0^ ERROR explanation MAGOUT(0) = 1 ^ COUNTER ^ MESSAGE/1childIENOK + the counter of saved annotations MAGOUT(n) = LAYER ID ^ ANNOTATOR ^ SAVED DATE/TIME ^ ANNOTATION VERSION             ^ SOURCE ^ DELETION ^ TIU COMPLETION              ^ SERVICE/SECTION  ^ SITE# ^ DUZ Definition of each piece of MAGOUT(n)[1] = layer ID (unique to the image, not globally unique)[2] = name of user who saved layer[3] = date layer stored[4] = annotation version[5] = application that created layer[6] = 0/1 to indicate if layer deleted[7] = indicates if the layer was saved after the TIU Note COMPLETE (if there is a note)[8] = Service Section of user who saved layer[9] = user site name[10] = DUZ of user who saved layer

## Properties

Property | Value
--- | ---
Label | GET
MUMPS Implementation | [MAGSANNO](http://code.osehra.org/dox/Routine_MAGSANNO_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | IMAGE file (#2005) internal entry number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}