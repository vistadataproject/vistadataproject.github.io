---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV ACCEPT BUFFER ENTRY<br/>
# DSIV ACCEPT BUFFER ENTRY

Processes INSURANCE BUFFER file entry to insurance filesand patient insurance type multiple.  Marks buffer entrySTATUS=ACCEPTED.  This RPC should perform the same actionsas the List Manager "Accept" action.

## Properties

Property | Value
--- | ---
Label | ACCEPT
Routine | [DSIVICA](http://code.osehra.org/dox/Routine_DSIVICA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBBUFDA | LITERAL | 16 | true | INSURANCE BUFFER file IEN to be processed.
DFN | LITERAL | 16 | true | PATIENT file IEN.
IBINSDA | LITERAL | 16 | true | INSURANCE COMPANY file IEN if not adding a new entry.This parameter is optional but must be present if theIBNEWINS parameter value is false (not adding a newINSURANCE COMPANY entry).
IBGRPDA | LITERAL | 36 | true | GROUP INSURANCE PLAN file IEN if not adding a new entry.This parameter is optional but must be present if theIBNEWGRP parameter value is false (not adding a newGROUP INSURANCE PLAN entry).
IBPOLDA | LITERAL | 16 | true | IEN of INSURANCE TYPE sub-file (#2.312) of PATIENT fileif not adding a new entry.  This parameter must be presentif the INSURANCE BUFFER data will update an existing entryin the INSURANCE TYPE multiple.
IBMVINS | LITERAL | 1 | true | Flag indicating whether buffer data will 1&#x3D;Merge, 2&#x3D;Overwrite, 3&#x3D;Replacedata in file #36.  Default is 2&#x3D;Overwrite. In the List Manager interfaceflag value 4 means &quot;individually accept.&quot;  This value is not valid in theRemote Procedure Call. The terms &quot;merge,&quot; &quot;overwrite,&quot; and &quot;replace&quot; aredefined as follows:  TYPE    - 1 &#x3D; Merge     (only buffer data moved to blank fields                          in ins file, no replace)           2 &#x3D; Overwrite (all buffer data moved to ins file,                          replace existing data)           3 &#x3D; Replace   (all buffer data including null move to                          ins file)                         ins file)
IBMVGRP | LITERAL | 1 | true | Flag indicating whether buffer data will 1&#x3D;Merge, 2&#x3D;Overwrite, 3&#x3D;Replacedata in file #355.3.  Default is 2&#x3D;Overwrite. In the List Managerinterface flag value 4 means &quot;individually accept.&quot;  This value is notvalid in the Remote Procedure Call. The terms &quot;merge,&quot; &quot;overwrite,&quot; and&quot;replace&quot; are defined as follows:  TYPE    - 1 &#x3D; Merge     (only buffer data moved to blank fields                          in ins file, no replace)           2 &#x3D; Overwrite (all buffer data moved to ins file,                          replace existing data)           3 &#x3D; Replace   (all buffer data including null move to                          ins file)                         ins file)
IBMVPOL | LITERAL | 1 | true | Flag indicating whether buffer data will 1&#x3D;Merge, 2&#x3D;Overwrite, 3&#x3D;Replacedata in subfile #2.312.  Default is 2&#x3D;Overwrite. In the List Managerinterface flag value 4 means &quot;individually accept.&quot;  This value is notvalid in the Remote Procedure Call. The terms &quot;merge,&quot; &quot;overwrite,&quot; and&quot;replace&quot; are defined as follows: TYPE    - 1 &#x3D; Merge     (only buffer data moved to blank fields                         in ins file, no replace)          2 &#x3D; Overwrite (all buffer data moved to ins file,                         replace existing data)          3 &#x3D; Replace   (all buffer data including null move to                         ins file)                         ins file)
IBNEWINS | LITERAL | 1 | true | Flag indicating that a new entry should be created in theINSURANCE COMPANY file (#36).  1&#x3D;TRUE (Create new entry)0&#x3D;FALSE (Default - Do not create new entry).
IBNEWGRP | LITERAL | 1 | true | Flag indicating that a new entry should be created in theGROUP INSURANCE PLAN file (#355.3).  1&#x3D;TRUE (Create new entry)0&#x3D;FALSE (Default - Do not create new entry).
IBNEWPOL | LITERAL | 1 | true | Flag indicating that a new entry should be created in theINSURANCE TYPE subfile (#2.312).  1&#x3D;TRUE (Create new entry)0&#x3D;FALSE (Default - Do not create new entry).
IVMREPTR | LITERAL | 4 | true | Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable.
DSIVAUDT | LITERAL | 10 | true | Internal entry number in File #19625.  Used when filing COMMENT fields.
IBDATA | LITERAL | 100 | true | IBDATA array containts the following variables and data in an array e.g. IBDATA(1)&#x3D;&quot;IBINSDA^1002&quot;      IBDATA(2)&#x3D;&quot;INGRPDA^&quot;      IBINSDA&#x3D;File 36 IEN if not adding new entryIBGRPDA&#x3D;File 355.3 IEN if not adding new entryIBPOLDA&#x3D;File 2.312 IEN if not adding new entryIBMVINS&#x3D;Type for INSURANCE 1&#x3D;Merge, 2&#x3D;Overwrite, 3&#x3D;Replace, 4&#x3D;(n/a)IBMVGRP&#x3D;Type for GROUP     1&#x3D;Merge, 2&#x3D;Overwrite, 3&#x3D;Replace, 4&#x3D;(n/a)IBMVPOL&#x3D;Type for POLICY    1&#x3D;Merge, 2&#x3D;Overwrite, 3&#x3D;Replace, 4&#x3D;(n/a)IBNEWINS&#x3D;Add new INSURANCE COMPANY flag (non-zero means add)IBNEWGRP&#x3D;Add new GROUP INSURANCE PLAN flag (non-zero means add)IBNEWPOL&#x3D;Add new patient insurance policy (non-zero means add)IVMREPTR&#x3D;File 301.91 IEN if applicable (IVM REASONS FOR NOT UPLOADING..)DSIVAUDT&#x3D;File 19625 IEN if updating pt policy or group plan COMMENTIBELIG&#x3D;to copy eIV report to pt elig/benefits 0&#x3D;no,1&#x3D;yes



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}