import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getSweetProducts(): { id: number, name: string, price: number, image: string, subCategory?: string }[] {
    return [
      { id: 1, name: 'Ghraiba Homs', price: 2.4, image: 'assets/img/ghraibahoms.jpg', subCategory: 'Ghraiba' },
      { id: 2, name: 'Ghraiba Homs Fekya', price: 2.8, image: 'assets/img/ghraibahomsfekia.jpg', subCategory: 'Ghraiba' },
      { id: 3, name: 'Ghraiba Droo', price: 9, image: 'assets/img/ghraibadroo.jpg', subCategory: 'Ghraiba' },
      { id: 4, name: 'Ghraiba Bidha Fekya', price: 7, image: 'assets/img/ghraibabidhafekia.jpg', subCategory: 'Ghraiba' },
      { id: 5, name: 'Kaak Warka Amande', price: 5, image: 'assets/img/kaakwarka001.jpg', subCategory: 'Kaak Warka' },
      { id: 6, name: 'Kaak Warka Noisette', price: 7.5, image: 'assets/img/kaakwarkanoisette.jpg', subCategory: 'Kaak Warka' },
      { id: 7, name: 'Kaak Warka Pistache', price: 9.5, image: 'assets/img/kaakwarkapistache.jpg', subCategory: 'Kaak Warka' },
      { id: 8, name: 'Baklawa Amande Noisette', price: 6.5, image: 'assets/img/baklawanoisette.jpg', subCategory: 'Baklawa' },
      { id: 9, name: 'Baklawa Fekia', price: 8.5, image: 'assets/img/baklawanoisette.jpg', subCategory: 'Baklawa' },
      { id: 10, name: 'Baklawa Royale', price: 12, image: 'assets/img/baklawaroy.jpg', subCategory: 'Baklawa' },
      { id: 11, name: 'Hlow Louz', price: 6.5, image: 'assets/img/hlowlouz.jpg', subCategory: 'Hlow Classique' },
      { id: 12, name: 'Kaaber Carthage', price: 5, image: 'assets/img/carthage.jpg', subCategory: 'Hlow Classique' },
      { id: 13, name: 'Kaak Anber', price: 6.5, image: 'assets/img/ambar.jpg', subCategory: 'Hlow Classique' },
      { id: 14, name: 'Kaak Louz', price: 6.5, image: 'assets/img/kaaklouz.jpg', subCategory: 'Hlow Classique' },
      { id: 15, name: 'Boulette Amande Pistache', price: 7.5, image: 'assets/img/boulette.jpg', subCategory: 'Hlow Classique' },
      { id: 16, name: 'Boulette Amande Noisette', price: 7, image: 'assets/img/boulette.jpg', subCategory: 'Hlow Classique' },
      { id: 17, name: 'Petit Four aux Amande', price: 5, image: 'assets/img/petitfour.jpg', subCategory: 'Hlow Classique' },
      { id: 18, name: 'Twil aux Amande', price: 5, image: 'assets/img/twil.jpg', subCategory: 'Hlow Classique' },
      { id: 19, name: 'Biscuit Soleil', price: 3, image: 'assets/img/biscuitsoleil.jpg', subCategory: 'Hlow Classique' },
      { id: 20, name: 'Craquelé', price: 3.5, image: 'assets/img/craque.jpg', subCategory: 'Hlow Classique' },
      { id: 21, name: 'Cookies', price: 3.5, image: 'assets/img/cookies.jpg', subCategory: 'Hlow Classique' },
      { id: 22, name: 'Biscuit Aid', price: 1.5, image: 'assets/img/biscuitaid.jpg', subCategory: 'Hlow Classique' },
      { id: 23, name: 'Sablé au Confiture', price: 2.5, image: 'assets/img/sableconf.jpg', subCategory: 'Hlow Classique' },
      { id: 24, name: 'Sablé au Chocolat', price: 2.8, image: 'assets/img/sablechoco.jpg', subCategory: 'Hlow Classique' },
      { id: 25, name: 'Sablé au Framboise', price: 2.8, image: 'assets/img/sableframb.jpg', subCategory: 'Hlow Classique' },
      { id: 26, name: 'Biscuit Bébé', price: 2.5, image: 'assets/img/biscuitbebe.jpg', subCategory: 'Hlow Classique' },
      { id: 27, name: 'Amandine', price: 3.5, image: 'assets/img/amandine.jpg', subCategory: 'Hlow Classique' },
      { id: 28, name: 'Cake aux Amandes', price: 8, image: 'assets/img/cakeamande.jpg', subCategory: 'Cakes' },
      { id: 29, name: 'Cake Chocolat', price: 8, image: 'assets/img/cakechoco.jpg', subCategory: 'Cakes' },
      { id: 30, name: 'Zrir Noisette', price: 6, image: 'assets/img/zrirnoisette.jpg', subCategory: 'Zrir' },
      { id: 31, name: 'Zrir Pistache', price: 9.5, image: 'assets/img/zrirpistache.jpg', subCategory: 'Zrir' },
      { id: 32, name: 'Zrir Fruits Sec', price: 12, image: 'assets/img/zrirfsec.jpg', subCategory: 'Zrir' },
      { id: 33, name: 'Zrir Jeljlen', price: 4.5, image: 'assets/img/zrirjeljlen.jpg', subCategory: 'Zrir' }
    ];
  }

  getSaltyProducts(): { id: number, name: string, price: number, image: string, subCategory?: string }[] {
    return [
      { id: 34, name: 'Danouni Poulet', price: 5.500, image: 'assets/img/danounipoulet.jpg', subCategory: 'Poulet' },
      { id: 35, name: 'Boulette Poulet', price: 5.500, image: 'assets/img/boulettepoulet.jpg', subCategory: 'Poulet' },
      { id: 36, name: 'Tartelette Poulet', price: 5.500, image: 'assets/img/poulet.jpg', subCategory: 'Poulet' },
      { id: 37, name: 'Samsa Poulet', price: 5.500, image: 'assets/img/samsapoulet.jpg', subCategory: 'Poulet' },
      { id: 38, name: 'Mini Pizza', price: 5.500, image: 'assets/img/minipizza.jpg', subCategory: 'Thon' },
      { id: 39, name: 'Zouza Thon', price: 5.500, image: 'assets/img/zouzathon.jpg', subCategory: 'Thon' },
      { id: 40, name: 'Tartelette Thon', price: 5.500, image: 'assets/img/tartethon.jpg', subCategory: 'Thon' },
      { id: 41, name: 'Danouni Thon', price: 5.500, image: 'assets/img/danounithon.jpg', subCategory: 'Thon' },
      { id: 42, name: 'Sandwich Roulé', price: 5.500, image: 'assets/img/roule.jpg', subCategory: 'Thon' },
      { id: 43, name: 'Baklawa Viande', price: 7.500, image: 'assets/img/baklawamelha.jpg', subCategory: 'Viande' },
      { id: 44, name: 'Tajine Elbay', price: 7.500, image: 'assets/img/tajinebey.jpg', subCategory: 'Viande' },
      { id: 45, name: 'Zitouna', price: 7.500, image: 'assets/img/zitouna.jpg', subCategory: 'Viande' },
      { id: 46, name: 'Boulette Viande', price: 7.500, image: 'assets/img/tarteviande.jpg', subCategory: 'Viande' },
      { id: 47, name: 'Danouni Viande', price: 7.500, image: 'assets/img/danouniviande.jpg', subCategory: 'Viande' },
      // Fruit de mer subcategory
      { id: 48, name: 'Tartelette crevette', price: 11, image: 'assets/img/tartecrevette.jpg', subCategory: 'Fruit de mer' },
      { id: 49, name: 'Tartelette poulpe', price: 11, image: 'assets/img/tartepoulpe.jpg', subCategory: 'Fruit de mer' },
      { id: 50, name: 'Tartelette calamar', price: 11, image: 'assets/img/tartecalamard.jpg', subCategory: 'Fruit de mer' },
      { id: 51, name: 'Tartelette saumon', price: 11, image: 'assets/img/tartesaumon.jpg', subCategory: 'Fruit de mer' }
    ];
  }

  getGateauProducts(): { id: number, name: string, price: number, image: string, subCategory?: string }[] {
    return [];
  }

  getSubCategoryDescriptions(): { subCategory: string, sizes: { size: number, price: number }[], contact: string }[] {
    const descriptions = [
      {
        subCategory: 'Anniversaire',
        sizes: [
          { size: 20, price: 30 },
          { size: 25, price: 35 },
          { size: 30, price: 40 }
        ],
        contact: 'Pour plus d\'information, veuillez nous contacter sur 26314495'
      },
      {
        subCategory: 'Fiançailles',
        sizes: [
          { size: 20, price: 32 },
          { size: 25, price: 38 },
          { size: 30, price: 45 }
        ],
        contact: 'Pour plus d\'information, veuillez nous contacter sur 26314495'
      },
      {
        subCategory: 'Personnalisé',
        sizes: [
          { size: 20, price: 45 },
          { size: 25, price: 50 },
          { size: 30, price: 60 }
        ],
        contact: 'Pour plus d\'information, veuillez nous contacter sur 26314495'
      }
    ];
    console.log('SubCategory Descriptions:', descriptions);
    return descriptions;
  }

  getProductsByCategory(category: string): { id: number, name: string, price: number, image: string, subCategory?: string }[] {
    switch (category.toLowerCase()) {
      case 'sweet':
        return this.getSweetProducts();
      case 'salty':
        return this.getSaltyProducts();
      case 'gateau':
        return this.getGateauProducts();
      default:
        return [];
    }
  }

  getProductsBySubCategory(category: string, subCategory: string): { id: number, name: string, price: number, image: string, subCategory?: string }[] {
    const allProducts = this.getProductsByCategory(category);
    return allProducts.filter(product => product.subCategory?.toLowerCase() === subCategory.toLowerCase());
  }
}