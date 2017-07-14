---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; GMV ADD VM<br/>
# GMV ADD VM

This remote procedure call is used to enter a new Vital/Measurement record in the GMRV Vital Measurement file (#120.5).   This remote procedure call is documented in Integration Agreement 3996.

**Native RPC Documentation:** [GMV ADD VM](../VISTARPC/GMV_ADD_VM)

**MUMPS Implementation:** [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Vitals
Class | CHANGE
Complexity | MEDIUM
Uses | 
Return Type | SINGLE VALUE
Return Description | RESULT does not return a value. <br/> <br/>The data is filed in the GMRV VITAL MEASUREMENT (#120.5) file.<br/> <br/>Example:<br/> <br/> > S GMRVDATA="3051011.1635^134^1;120/80;^67^87*2:38:50:75"<br/> > D EN1^GMVDCSAV(.RESULT,GMRVDATA)
File Types Used | [120.5](../VDM/Gmrv_Vital_Measurement-120_5)
Parameters Used | GMRVDATA


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMRVDATA | LITERAL | true | This variable contains the data needed to create a Vital/Measurement<br/>record in the GMRV Vital Measurement (#120.5) file. The values are parsed<br/>out of the GMRVDATA variable and filed.<br/> <br/>GMRVDATA has the following data:<br/> piece1^piece2^piece3^piece4^piece5<br/> <br/> where:<br/>  piece1 = date/time in FileMan internal format<br/>  piece2 = patient number from FILE 2 (i.e., DFN)<br/>  piece3 = vital type, a semi-colon, the reading, a semi-colon, and <br/>           oxygen flow rate and percentage values [optional] (e.g.,<br/>           21;99;1 l/min 90%)<br/>  piece4 = hospital location (FILE 44) pointer value<br/>  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the <br/>           qualifier (File 120.52) internal entry numbers separated by<br/>           colons (e.g., 547*50:65) | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}