---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ACCEPT BUFFER ENTRY 

 property | value 
--- | --- 
 label | DSIV ACCEPT BUFFER ENTRY
 tag | ACCEPT
 routine | [DSIVICA](http://code.osehra.org/dox/Routine_DSIVICA_source.html)
 return value type | ARRAY
 description | Processes INSURANCE BUFFER file entry to insurance filesand patient insurance type multiple.  Marks buffer entrySTATUS=ACCEPTED.  This RPC should perform the same actionsas the List Manager \Accept\ action.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBBUFDA | LITERAL | 16 | true | INSURANCE BUFFER file IEN to be processed. | 
| DFN | LITERAL | 16 | true | PATIENT file IEN. | 
| IBINSDA | LITERAL | 16 | true | INSURANCE COMPANY file IEN if not adding a new entry.This parameter is optional but must be present if theIBNEWINS parameter value is false (not adding a newINSURANCE COMPANY entry). | 
| IBGRPDA | LITERAL | 36 | true | GROUP INSURANCE PLAN file IEN if not adding a new entry.This parameter is optional but must be present if theIBNEWGRP parameter value is false (not adding a newGROUP INSURANCE PLAN entry). | 
| IBPOLDA | LITERAL | 16 | true | IEN of INSURANCE TYPE sub-file (#2.312) of PATIENT fileif not adding a new entry.  This parameter must be presentif the INSURANCE BUFFER data will update an existing entryin the INSURANCE TYPE multiple. | 
| IBMVINS | LITERAL | 1 | true | Flag indicating whether buffer data will 1=Merge, 2=Overwrite, 3=Replacedata in file #36.  Default is 2=Overwrite. In the List Manager interfaceflag value 4 means \individually accept.\  This value is not valid in theRemote Procedure Call. The terms \merge,\ \overwrite,\ and \replace\ aredefined as follows:  TYPE    - 1 = Merge     (only buffer data moved to blank fields                          in ins file, no replace)           2 = Overwrite (all buffer data moved to ins file,                          replace existing data)           3 = Replace   (all buffer data including null move to                          ins file)                         ins file) | 
| IBMVGRP | LITERAL | 1 | true | Flag indicating whether buffer data will 1=Merge, 2=Overwrite, 3=Replacedata in file #355.3.  Default is 2=Overwrite. In the List Managerinterface flag value 4 means \individually accept.\  This value is notvalid in the Remote Procedure Call. The terms \merge,\ \overwrite,\ and\replace\ are defined as follows:  TYPE    - 1 = Merge     (only buffer data moved to blank fields                          in ins file, no replace)           2 = Overwrite (all buffer data moved to ins file,                          replace existing data)           3 = Replace   (all buffer data including null move to                          ins file)                         ins file) | 
| IBMVPOL | LITERAL | 1 | true | Flag indicating whether buffer data will 1=Merge, 2=Overwrite, 3=Replacedata in subfile #2.312.  Default is 2=Overwrite. In the List Managerinterface flag value 4 means \individually accept.\  This value is notvalid in the Remote Procedure Call. The terms \merge,\ \overwrite,\ and\replace\ are defined as follows: TYPE    - 1 = Merge     (only buffer data moved to blank fields                         in ins file, no replace)          2 = Overwrite (all buffer data moved to ins file,                         replace existing data)          3 = Replace   (all buffer data including null move to                         ins file)                         ins file) | 
| IBNEWINS | LITERAL | 1 | true | Flag indicating that a new entry should be created in theINSURANCE COMPANY file (#36).  1=TRUE (Create new entry)0=FALSE (Default - Do not create new entry). | 
| IBNEWGRP | LITERAL | 1 | true | Flag indicating that a new entry should be created in theGROUP INSURANCE PLAN file (#355.3).  1=TRUE (Create new entry)0=FALSE (Default - Do not create new entry). | 
| IBNEWPOL | LITERAL | 1 | true | Flag indicating that a new entry should be created in theINSURANCE TYPE subfile (#2.312).  1=TRUE (Create new entry)0=FALSE (Default - Do not create new entry). | 
| IVMREPTR | LITERAL | 4 | true | Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable. | 
| DSIVAUDT | LITERAL | 10 | true | Internal entry number in File #19625.  Used when filing COMMENT fields. | 
| IBDATA | LITERAL | 100 | true | IBDATA array containts the following variables and data in an array e.g. IBDATA(1)=\IBINSDA^1002\      IBDATA(2)=\INGRPDA^\      IBINSDA=File 36 IEN if not adding new entryIBGRPDA=File 355.3 IEN if not adding new entryIBPOLDA=File 2.312 IEN if not adding new entryIBMVINS=Type for INSURANCE 1=Merge, 2=Overwrite, 3=Replace, 4=(n/a)IBMVGRP=Type for GROUP     1=Merge, 2=Overwrite, 3=Replace, 4=(n/a)IBMVPOL=Type for POLICY    1=Merge, 2=Overwrite, 3=Replace, 4=(n/a)IBNEWINS=Add new INSURANCE COMPANY flag (non-zero means add)IBNEWGRP=Add new GROUP INSURANCE PLAN flag (non-zero means add)IBNEWPOL=Add new patient insurance policy (non-zero means add)IVMREPTR=File 301.91 IEN if applicable (IVM REASONS FOR NOT UPLOADING..)DSIVAUDT=File 19625 IEN if updating pt policy or group plan COMMENTIBELIG=to copy eIV report to pt elig/benefits 0=no,1=yes | 