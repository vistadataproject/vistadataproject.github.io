---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Usr_Class-8930 

<dl>
<dt>id</dt><dd>Usr_Class-8930</dd>
<dt>fmId</dt><dd>8930</dd>
<dt>label</dt><dd>Usr Class</dd>
<dt>location</dt><dd>^USR(8930,</dd>
<dt>description</dt><dd>This file is intended to allow the definition of user classes in such a<br/>way that they are useful across packages.  It will undoubtedly evolve with<br/>more experience in this area.<br/> <br/>These user classes are then used to support part of the the<br/>\authorization\ concept - who may do what to a document, order, etc.<br/> <br/>They are also used to support part of the \subscription\ concept - who<br/>should receive something, e.g. a notification that a document needs<br/>signature.<br/> <br/>The User Authorization/Subscription file points to the User Class file to<br/>allocate authorizations/subscriptions to appropriate user classes.<br/> <br/>The User Class Membership file links users in the New Person file to User<br/>Classes.<br/> <br/>This file supports an infinite hierarchy of subclasses, with each entry<br/>having as many subclasses as desired.  Subclasses are contained in the<br/>same file, as entries in their own right.  A class automatically contains<br/>as members all members of its subclasses, as well as explicit members of<br/>the class itself.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the user class (e.g., Transcriptionist, Medical Record<br/>Technician, MIS Manager, Medical Student, Nurse, Resident, etc.).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| abbreviation | .02 | Abbreviation |  | STRING |  | INDEXED |  | 
| active | .03 | Active |  | ENUMERATION |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>1</dt><dd>Active</dd><dt>0</dt><dd>Inactive</dd></dl>{:/} | 
| display_name | .04 | Display Name |  | STRING |  | INDEXED |  | 
| person_class | .05 | Person Class | {::nomarkdown}This provides a mapping between the User Class file of ASU and the Person <br/>Class file, which encodes the HCFA draft standard Taxonomy of Health Care <br/>Providers.{:/} | POINTER |  |  | Person_Class-8932_1 | 
| subclass | 1 | Subclass | {::nomarkdown}If for example Service Chief is entered as a subclass of Staff Physician,<br/>then persons listed as service chiefs inherit all privileges assigned to<br/>staff physicians.<br/>A subclass of a class is a subset of the class.  For example, since<br/>the class Staff Physician.<br/> <br/>Subclasses will be used for inheriting user authorizations/subscriptions.<br/>For example, if an entry in the User Authorization/Subscription file states<br/>that the user class Staff Physician may sign progress notes, and if the<br/>entry states that this entry includes user subclasses, and if Service<br/>chief is a subclass of class Staff Physician in the User Class file,<br/>then service chiefs may also sign progress notes.<br/> <br/>If a User Authorization/Subscription file entry includes user subclasses,<br/>it also includes subclasses of subclasses, etc.{:/} | [POINTER] |  |  | {id:Usr_Class-8930} | 
| ok_to_distribute | 2 | Ok To Distribute | {::nomarkdown}Answer \YES\ if this individual User Class is to be distributed<br/>nationally.  Answer \NO\ if not.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:30:51 am</p>{:/}