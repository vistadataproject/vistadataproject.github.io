---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 PAT GET IMAGES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 PAT GET IMAGES{:/}
 tag | {::nomarkdown}PGI{:/}
 routine | [MAGSIXG1](http://code.osehra.org/dox/Routine_MAGSIXG1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call is used to filter out those specialty for whicha given image category may be relevant. When images are displayed, it is desirable to limit the list of presentedimages to only those that are likely to be relevant in the currentcontext. This procedure accepts a patient-IEN (DFN) and optionally also a category,type, event and specialty. This procedure will return a list of all images for that patient thatmatch the specified other input parameters. NOTE: This remote procedure is kept for backward compatibility only.       Please use the MAG4 IMAGE LIST remote procedure for any new      development.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is the IEN in the Patient File (#2)of a patient.{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Image class names or IENs (see the CLASS INDEX field (41) of the IMAGEfile (#2005) for details) separated by commas.Image categories are defined in file 2005.82.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Image type names or IENs (see the TYPE INDEX field (42) of the file #2005for details) separated by commas.Image types are defined in file 2005.83.{:/} | 
| {::nomarkdown}EVENT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Procedure/Event names or IENs (see the PROC/EVENT INDEX field (43) of thefile #2005 for details) separated by commas.Image events are defined in file 2005.85.{:/} | 
| {::nomarkdown}SPEC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Speciality/SubSpecialty names or IENs (see the SPEC/SUBSPEC INDEX field(44) of the file #2005 for details) separated by commas.Image specialties are defined in file 2005.84.{:/} | 
| {::nomarkdown}FROMDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Beginning of the date range for image selection. Dates can be in internalor external FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. The date range filter is applied to the exam/procedure dates(PROCEDURE/EXAM DATE/TIME field (15)).{:/} | 
| {::nomarkdown}TODATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}End of the date range for image selection. Dates can be in internal orexternal FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. The date range filter is applied to the exam/procedure dates(PROCEDURE/EXAM DATE/TIME field (15)).{:/} | 
| {::nomarkdown}ORIGIN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Internal or external values of the ORIGIN INDEX field (45) of the file#2005 separated by commas.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reserved for future use.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   D  Include only deleted images (file #2005.1)  E  Include only existing images (file #2005) By default, the \E\ value is assumed. {:/} | 
| {::nomarkdown}PKG{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Internal or external values of the PACKAGE INDEX field (40) of the file#2005 separated by commas.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}