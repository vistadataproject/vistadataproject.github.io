---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 PAT GET IMAGES
# MAG4 PAT GET IMAGES

This Remote Procedure Call is used to filter out those specialty for whicha given image category may be relevant. When images are displayed, it is desirable to limit the list of presentedimages to only those that are likely to be relevant in the currentcontext. This procedure accepts a patient-IEN (DFN) and optionally also a category,type, event and specialty. This procedure will return a list of all images for that patient thatmatch the specified other input parameters. NOTE: This remote procedure is kept for backward compatibility only.       Please use the MAG4 IMAGE LIST remote procedure for any new      development.

Property | Value
--- | ---
Label | PGI
Routine | [MAGSIXG1](http://code.osehra.org/dox/Routine_MAGSIXG1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 15 | true | The value of this parameter is the IEN in the Patient File (#2)of a patient.
CLASS | LITERAL |  |  | Image class names or IENs (see the CLASS INDEX field (41) of the IMAGEfile (#2005) for details) separated by commas.Image categories are defined in file 2005.82.
TYPE | LITERAL |  |  | Image type names or IENs (see the TYPE INDEX field (42) of the file #2005for details) separated by commas.Image types are defined in file 2005.83.
EVENT | LITERAL |  |  | Procedure/Event names or IENs (see the PROC/EVENT INDEX field (43) of thefile #2005 for details) separated by commas.Image events are defined in file 2005.85.
SPEC | LITERAL |  |  | Speciality/SubSpecialty names or IENs (see the SPEC/SUBSPEC INDEX field(44) of the file #2005 for details) separated by commas.Image specialties are defined in file 2005.84.
FROMDATE | LITERAL |  |  | Beginning of the date range for image selection. Dates can be in internalor external FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. The date range filter is applied to the exam/procedure dates(PROCEDURE/EXAM DATE/TIME field (15)).
TODATE | LITERAL |  |  | End of the date range for image selection. Dates can be in internal orexternal FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. The date range filter is applied to the exam/procedure dates(PROCEDURE/EXAM DATE/TIME field (15)).
ORIGIN | LITERAL |  |  | Internal or external values of the ORIGIN INDEX field (45) of the file#2005 separated by commas.
DATA | LITERAL |  |  | Reserved for future use.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   D  Include only deleted images (file #2005.1)  E  Include only existing images (file #2005) By default, the &quot;E&quot; value is assumed. 
PKG | LITERAL |  |  | Internal or external values of the PACKAGE INDEX field (40) of the file#2005 separated by commas.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}