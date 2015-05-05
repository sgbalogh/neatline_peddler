Neatline.on('start', function() {
 
  var map = Neatline.request('MAP:getMap');
 
  $('.testA').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'tags',
  evaluator: function(record) {
    return record.hasTag('test');
  }
});
  });
  
    $('.AdditionalCareers').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'AdditionalCareers',
  evaluator: function(record) {
    return record.hasTag('AdditionalCareers');
  }
});
  });
  
    $('.AntiSemiticRhetoric').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'AntiSemiticRhetoric',
  evaluator: function(record) {
    return record.hasTag('AntiSemiticRhetoric');
  }
});
  });

    $('.Bartering').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'Bartering',
  evaluator: function(record) {
    return record.hasTag('Bartering');
  }
});
  });

    $('.BusinessPractices').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'BusinessPractices',
  evaluator: function(record) {
    return record.hasTag('BusinessPractices');
  }
});
  });

    $('.ConflictViolenceCommunal').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'ConflictViolenceCommunal',
  evaluator: function(record) {
    return record.hasTag('ConflictViolenceCommunal');
  }
});
  });

    $('.ConflictViolencePersonal').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'ConflictViolencePersonal',
  evaluator: function(record) {
    return record.hasTag('ConflictViolencePersonal');
  }
});
  });

    $('.ContextualResource').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'ContextualResource',
  evaluator: function(record) {
    return record.hasTag('ContextualResource');
  }
});
  });

    $('.CulturalExchange').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'CulturalExchange',
  evaluator: function(record) {
    return record.hasTag('CulturalExchange');
  }
});
  });

    $('.Family').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'Family',
  evaluator: function(record) {
    return record.hasTag('Family');
  }
});
  });

    $('.LiteraryArtisticDepiction').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'LiteraryArtisticDepiction',
  evaluator: function(record) {
    return record.hasTag('LiteraryArtisticDepiction');
  }
});
  });

    $('.NonPeddlingBackground').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'NonPeddlingBackground',
  evaluator: function(record) {
    return record.hasTag('NonPeddlingBackground');
  }
});
  });

    $('.PeddlingBackground').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'PeddlingBackground',
  evaluator: function(record) {
    return record.hasTag('PeddlingBackground');
  }
});
  });

    $('.ReligiousPractices').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'ReligiousPractices',
  evaluator: function(record) {
    return record.hasTag('ReligiousPractices');
  }
});
  });

    $('.RestrictionsCommerce').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'RestrictionsCommerce',
  evaluator: function(record) {
    return record.hasTag('RestrictionsCommerce');
  }
});
  });

    $('.Routes').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'Routes',
  evaluator: function(record) {
    return record.hasTag('Routes');
  }
});
  });

    $('.Sponsor').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'Sponsor',
  evaluator: function(record) {
    return record.hasTag('Sponsor');
  }
});
  });

    $('.SubsequentCommercialCareers').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'SubsequentCommercialCareers',
  evaluator: function(record) {
    return record.hasTag('SubsequentCommercialCareers');
  }
});
  });

    $('.SubsequentNonCommercial').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'SubsequentNonCommercial',
  evaluator: function(record) {
    return record.hasTag('SubsequentNonCommercial');
  }
});
  });

    $('.Transportation').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'Transportation',
  evaluator: function(record) {
    return record.hasTag('Transportation');
  }
});
  });

    $('.VictimsOfCrime').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'VictimsOfCrime',
  evaluator: function(record) {
    return record.hasTag('VictimsOfCrime');
  }
});
  });

    $('.Wares').click(function() {
  	Neatline.vent.trigger('setFilter', {
  key: 'Wares',
  evaluator: function(record) {
    return record.hasTag('Wares');
  }
});
  });
  
   $('.reset').click(function() {
  	  Neatline.vent.trigger('removeFilter', { key: 'AdditionalCareers' });
  	  Neatline.vent.trigger('removeFilter', { key: 'AntiSemiticRhetoric' });
  	  Neatline.vent.trigger('removeFilter', { key: 'Bartering' });
  	  Neatline.vent.trigger('removeFilter', { key: 'BusinessPractices' });
  	  Neatline.vent.trigger('removeFilter', { key: 'ConflictViolenceCommunal' });
  	  Neatline.vent.trigger('removeFilter', { key: 'ConflictViolencePersonal' });
  	  Neatline.vent.trigger('removeFilter', { key: 'ContextualResource' });
  	  Neatline.vent.trigger('removeFilter', { key: 'CulturalExchange' });
  	  Neatline.vent.trigger('removeFilter', { key: 'Family' });
  	  Neatline.vent.trigger('removeFilter', { key: 'LiteraryArtisticDepiction' });
  	  Neatline.vent.trigger('removeFilter', { key: 'NonPeddlingBackground' });
  	  Neatline.vent.trigger('removeFilter', { key: 'PeddlingBackground' });
  	  Neatline.vent.trigger('removeFilter', { key: 'ReligiousPractices' });
  	  Neatline.vent.trigger('removeFilter', { key: 'RestrictionsCommerce' });
  	  Neatline.vent.trigger('removeFilter', { key: 'Routes' });
  	  Neatline.vent.trigger('removeFilter', { key: 'Sponsor' });
  	  Neatline.vent.trigger('removeFilter', { key: 'SubsequentCommercialCareers' });
  	  Neatline.vent.trigger('removeFilter', { key: 'SubsequentNonCommercial' });
  	  Neatline.vent.trigger('removeFilter', { key: 'Transportation' });
  	  Neatline.vent.trigger('removeFilter', { key: 'VictimsOfCrime' });
  	  Neatline.vent.trigger('removeFilter', { key: 'Wares' });
  });
 
  $('.btn.out').click(function() {
    map.zoomOut();
  });
 
});