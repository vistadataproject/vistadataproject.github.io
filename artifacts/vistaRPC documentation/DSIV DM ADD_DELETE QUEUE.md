---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV DM ADD_DELETE QUEUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV DM ADD_DELETE QUEUE{:/}
 tag | {::nomarkdown}UPD{:/}
 routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will allow you to add or delete an entry to file 19621.  When you use the VistA Imaging import an image API, you are returned a queue number.  This number means that VistA Imaging background processor accepted your request and place it in a queue and will process it in due time.  After you get this successful queue message you should immediately file that data through this RPC. This file is to allow communication between the VistA Imaging background processor and the DSS Document Management system.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the action that should be taken.  The default value if not passed is A.  ACT = A then add a record to file 19621 - TRANID and QUEUE required  ACT = D then delete a record in file 19621 - TRANID is only required{:/} | 
| {::nomarkdown}TRANID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the transaction ID you passed to the VistA Imaging import API.  It must be in the format DSS;xxxxxx This is optional.  If it is not passed, then a transaction ID will be built from the APP parameter.{:/} | 
| {::nomarkdown}QUEUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is only required if you have successfully queued an import request to VistA Imaging.  VistA Imaging import API will return you a QUEUE number.  This is only required if you are adding a record to file 19606.{:/} | 
| {::nomarkdown}APP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is optional only for DocManager.  For all othr DSS applications, this is required. DSS Product Prefixes for VistA Imaging:  Product Name                            Product Prefix  DocManager                              DM  CNT                                     CNT  Total Notes                             TNT  PFCS                                    PFCS  PTF                                     PTF  VRM                                     VRM  DRM                                     DRM  Dental Treatment Planner                DTP  TRM                                     TRM  PSS                                     PSS  ROI                                     ROI  MHTP                                    MHTP  Draeger                                 DRG  VistA Gateway/ProVation                 VGPRO  VistA Gateway/QuadraMed                 VGQM  VistA Gateway/Intisiq                   VGINQ  VistA Gateway/TheraDoc                  VGTHD{:/} | 
| {::nomarkdown}TIU{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field contains the pointer to the TIU DOCUMENT (#8925) file if the image has an associated note.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}