---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG ANNOT STORE IMAGE DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG ANNOT STORE IMAGE DETAIL{:/}
 tag | {::nomarkdown}STORE{:/}
 routine | [MAGSANNO](http://code.osehra.org/dox/Routine_MAGSANNO_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Per VHA Directive 2004-038, this should not be modified.+---------------------------------------------------------------+ Property of the US Government.                                 No permission to copy or redistribute this software is given.  Use of unreleased versions of this software requires the user  to execute a written test agreement with the VistA Imaging     Development Office of the Department of Veterans Affairs,      telephone (301) 734-0100.                                      The Food and Drug Administration classifies this software as   a medical device.  As such, it may not be changed in any way.  Modifications to this software may result in an adulterated    medical device under 21CFR820, the use of which is considered  to be a violation of US Federal Statutes.                     +---------------------------------------------------------------+Store the annotation detail/XML into the IMAGING ANOTATION file (#2005.002) .MAGOUT       Reference to a local variable where the results are returned to .MAGIEN       Internal Entry Number(IEN) of IMAGE file been annotated .SOURCE       Reference to the application XML been created by ('CLINIC' or 'VISTARAD'...etc) .VER          Reference to the annotation tool version (e.g.: IG16.2) .XML[]          Annotation raw data arrayReturn Values MAGOUT(0) is defined and its 1st '^'-piece is 0, then an error  occurred during execution of the procedure.MAGOUT(0) = 1 - success ^ total data lines ^ child IEN(optional)            0 - errorMAGOUT(1) = Saved layer info:::LAYER ID ^ANNOTATOR ^ SAVED DATE/TIME ^ ANNOTATION VERSION ^ SOURCE ^ DELETION ^ TIU COMPLETION             ^ SERVICE/SECTION  ^ SITE# ^ DUZ{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN is the IMAGE file (#2005) internal entry number, be used to save the annotation data.{:/} | 
| {::nomarkdown}XML{:/} | {::nomarkdown}WORD PROCESSING{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Annotation data in XML format{:/} | 
| {::nomarkdown}SOURCE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Source of annotation, e.g.: Clinic display/capture or VistARad{:/} | 
| {::nomarkdown}DELETION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} |  | {::nomarkdown}Annotation was deleted by super user.{:/} | 
| {::nomarkdown}VERSION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IMAGE GEAR VERSION (TOOLS), e.g.: 'IG16.3'{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}