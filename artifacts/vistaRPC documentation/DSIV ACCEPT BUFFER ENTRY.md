---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV ACCEPT BUFFER ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV ACCEPT BUFFER ENTRY{:/}
 tag | {::nomarkdown}ACCEPT{:/}
 routine | [DSIVICA](http://code.osehra.org/dox/Routine_DSIVICA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Processes INSURANCE BUFFER file entry to insurance filesand patient insurance type multiple.  Marks buffer entrySTATUS=ACCEPTED.  This RPC should perform the same actionsas the List Manager \Accept\ action.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBBUFDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INSURANCE BUFFER file IEN to be processed.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PATIENT file IEN.{:/} | 
| {::nomarkdown}IBINSDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INSURANCE COMPANY file IEN if not adding a new entry.This parameter is optional but must be present if theIBNEWINS parameter value is false (not adding a newINSURANCE COMPANY entry).{:/} | 
| {::nomarkdown}IBGRPDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}36{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GROUP INSURANCE PLAN file IEN if not adding a new entry.This parameter is optional but must be present if theIBNEWGRP parameter value is false (not adding a newGROUP INSURANCE PLAN entry).{:/} | 
| {::nomarkdown}IBPOLDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of INSURANCE TYPE sub-file (#2.312) of PATIENT fileif not adding a new entry.  This parameter must be presentif the INSURANCE BUFFER data will update an existing entryin the INSURANCE TYPE multiple.{:/} | 
| {::nomarkdown}IBMVINS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag indicating whether buffer data will 1=Merge, 2=Overwrite, 3=Replacedata in file #36.  Default is 2=Overwrite. In the List Manager interfaceflag value 4 means \individually accept.\  This value is not valid in theRemote Procedure Call. The terms \merge,\ \overwrite,\ and \replace\ aredefined as follows:  TYPE    - 1 = Merge     (only buffer data moved to blank fields                          in ins file, no replace)           2 = Overwrite (all buffer data moved to ins file,                          replace existing data)           3 = Replace   (all buffer data including null move to                          ins file)                         ins file){:/} | 
| {::nomarkdown}IBMVGRP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag indicating whether buffer data will 1=Merge, 2=Overwrite, 3=Replacedata in file #355.3.  Default is 2=Overwrite. In the List Managerinterface flag value 4 means \individually accept.\  This value is notvalid in the Remote Procedure Call. The terms \merge,\ \overwrite,\ and\replace\ are defined as follows:  TYPE    - 1 = Merge     (only buffer data moved to blank fields                          in ins file, no replace)           2 = Overwrite (all buffer data moved to ins file,                          replace existing data)           3 = Replace   (all buffer data including null move to                          ins file)                         ins file){:/} | 
| {::nomarkdown}IBMVPOL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag indicating whether buffer data will 1=Merge, 2=Overwrite, 3=Replacedata in subfile #2.312.  Default is 2=Overwrite. In the List Managerinterface flag value 4 means \individually accept.\  This value is notvalid in the Remote Procedure Call. The terms \merge,\ \overwrite,\ and\replace\ are defined as follows: TYPE    - 1 = Merge     (only buffer data moved to blank fields                         in ins file, no replace)          2 = Overwrite (all buffer data moved to ins file,                         replace existing data)          3 = Replace   (all buffer data including null move to                         ins file)                         ins file){:/} | 
| {::nomarkdown}IBNEWINS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag indicating that a new entry should be created in theINSURANCE COMPANY file (#36).  1=TRUE (Create new entry)0=FALSE (Default - Do not create new entry).{:/} | 
| {::nomarkdown}IBNEWGRP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag indicating that a new entry should be created in theGROUP INSURANCE PLAN file (#355.3).  1=TRUE (Create new entry)0=FALSE (Default - Do not create new entry).{:/} | 
| {::nomarkdown}IBNEWPOL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag indicating that a new entry should be created in theINSURANCE TYPE subfile (#2.312).  1=TRUE (Create new entry)0=FALSE (Default - Do not create new entry).{:/} | 
| {::nomarkdown}IVMREPTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable.{:/} | 
| {::nomarkdown}DSIVAUDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in File #19625.  Used when filing COMMENT fields.{:/} | 
| {::nomarkdown}IBDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IBDATA array containts the following variables and data in an array e.g. IBDATA(1)=\IBINSDA^1002\      IBDATA(2)=\INGRPDA^\      IBINSDA=File 36 IEN if not adding new entryIBGRPDA=File 355.3 IEN if not adding new entryIBPOLDA=File 2.312 IEN if not adding new entryIBMVINS=Type for INSURANCE 1=Merge, 2=Overwrite, 3=Replace, 4=(n/a)IBMVGRP=Type for GROUP     1=Merge, 2=Overwrite, 3=Replace, 4=(n/a)IBMVPOL=Type for POLICY    1=Merge, 2=Overwrite, 3=Replace, 4=(n/a)IBNEWINS=Add new INSURANCE COMPANY flag (non-zero means add)IBNEWGRP=Add new GROUP INSURANCE PLAN flag (non-zero means add)IBNEWPOL=Add new patient insurance policy (non-zero means add)IVMREPTR=File 301.91 IEN if applicable (IVM REASONS FOR NOT UPLOADING..)DSIVAUDT=File 19625 IEN if updating pt policy or group plan COMMENTIBELIG=to copy eIV report to pt elig/benefits 0=no,1=yes{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}