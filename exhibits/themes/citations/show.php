<?php echo head(array(
  'title' => nl_getExhibitField('title'),
  'bodyclass' => 'neatline show'
)); ?>
 
<!-- Exhibit title: -->
<h1><?php echo nl_getExhibitField('title'); ?></h1>
 
<!-- "View Fullscreen" link: -->
<?php echo nl_getExhibitLink(
  null, 'fullscreen', __('View Fullscreen'), array('class' => 'nl-fullscreen')
); ?>
 
<!-- Exhibit and description : -->
<?php echo nl_getExhibitMarkup(); ?>
<?php echo nl_getNarrativeMarkup(); ?>

<!-- Zoom buttons. -->
<div id="zoom">
      <div class="AdditionalCareers">AdditionalCareers</div>
  	  <div class="AntiSemiticRhetoric">AntiSemiticRhetoric</div>
  	  <div class="Bartering">Bartering</div>
  	  <div class="BusinessPractices">BusinessPractices</div>
  	  <div class="ConflictViolenceCommunal">ConflictViolenceCommunal</div>
  	  <div class="ConflictViolencePersonal">ConflictViolencePersonal</div>
  	  <div class="ContextualResource">ContextualResource</div>
  	  <div class="CulturalExchange">CulturalExchange</div>
  	  <div class="Family">Family</div>
  	  <div class="LiteraryArtisticDepiction">LiteraryArtisticDepiction</div>
  	  <div class="NonPeddlingBackground">NonPeddlingBackground</div>
  	  <div class="PeddlingBackground">PeddlingBackground</div>
  	  <div class="ReligiousPractices">ReligiousPractices</div>
  	  <div class="RestrictionsCommerce">RestrictionsCommerce</div>
  	  <div class="Routes">Routes</div>
  	  <div class="Sponsor">Sponsor</div>
  	  <div class="SubsequentCommercialCareers">SubsequentCommercialCareers</div>
  	  <div class="SubsequentNonCommercial">SubsequentNonCommercial</div>
  	  <div class="Transportation">Transportation</div>
  	  <div class="VictimsOfCrime">VictimsOfCrime</div>
  	  <div class="Wares">Wares</div>
	<div class="reset">RESET</div>
</div>
 
<?php echo foot(); ?>
